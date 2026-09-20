import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a_v76009s {
  fill: currentColor;
  d: path("M12 8q-.825 0-1.412.588T10 10t.588 1.413T12 12h.1q.4-.375.825-.687t.925-.563q.075-.175.113-.363T14 10q0-.825-.587-1.412T12 8m4.5 12h1v-2.5H20v-1h-2.5V14h-1v2.5H14v1h2.5zm.5 2q-2.075 0-3.537-1.463T12 17t1.463-3.537T17 12t3.538 1.463T22 17t-1.463 3.538T17 22m-5 0q-3.475-.875-5.738-3.988T4 11.1V5l8-3l8 3v5.675q-.65-.325-1.463-.5T17 10q-2.9 0-4.95 2.05T10 17q0 1.55.588 2.8t1.487 2.175q-.025 0-.037.013T12 22");
}
</style><path class="a_v76009s"/>`,
		"fallback": "material-symbols:encrypted-add-circle-sharp",
	});
}

export default Component;
