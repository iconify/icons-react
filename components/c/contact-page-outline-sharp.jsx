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
		"content": `<style>.tjo9chbud {
  fill: currentColor;
  d: path("M12 14q.825 0 1.413-.587T14 12t-.587-1.412T12 10t-1.412.588T10 12t.588 1.413T12 14m-4 4h8v-.575q0-.6-.325-1.1t-.9-.75q-.65-.275-1.35-.425T12 15t-1.425.15t-1.35.425q-.575.25-.9.75T8 17.425zm12 4H4V2h10l6 6zm-2-2V8.85L13.15 4H6v16zM6 20V4z");
}
</style><path class="tjo9chbud"/>`,
		"fallback": "material-symbols:contact-page-outline-sharp",
	});
}

export default Component;
