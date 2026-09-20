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
		"content": `<style>.v1foibcjd {
  fill: currentColor;
  d: path("m12 5l3.539 3.539l-.708.719L12.5 6.927v2.762l-1-1V6.996l-1.02 1.02l-.747-.749zm-.5 10.577V11.5l1 1v3.077zm8.333 5.683L17.573 19H6.615q-.69 0-1.153-.462T5 17.384v-2.423h1v2.423q0 .231.192.424t.423.192h9.958L2.741 4.167l.713-.713l17.092 17.092zM19 16.535l-1-1v-.573h1z");
}
</style><path class="v1foibcjd"/>`,
		"fallback": "material-symbols-light:file-upload-off",
	});
}

export default Component;
