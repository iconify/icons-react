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
		"content": `<style>.c_x2qkb3t {
  fill: currentColor;
  d: path("M12 17q.425 0 .713-.288T13 16t-.288-.712T12 15t-.712.288T11 16t.288.713T12 17m0-4q.425 0 .713-.288T13 12t-.288-.712T12 11t-.712.288T11 12t.288.713T12 13m0-4q.425 0 .713-.288T13 8t-.288-.712T12 7t-.712.288T11 8t.288.713T12 9M2 20v-6q.825 0 1.413-.587T4 12t-.587-1.412T2 10V4h20v6q-.825 0-1.412.588T20 12t.588 1.413T22 14v6zm2-2h16v-2.55q-.925-.55-1.463-1.462T18 12t.538-1.987T20 8.55V6H4v2.55q.925.55 1.463 1.463T6 12t-.537 1.988T4 15.45zm8-6");
}
</style><path class="c_x2qkb3t"/>`,
		"fallback": "material-symbols:confirmation-number-outline-sharp",
	});
}

export default Component;
