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
		"content": `<style>.xped370_e {
  fill: currentColor;
  d: path("M4 18q-1.25 0-2.125-.875T1 15V9q0-1.25.875-2.125T4 6h11.975q.65 0 .913.563t-.138 1.062l-4.6 5.75q-.4.5-.137 1.063t.912.562H16l-.4 2.175q-.075.35-.35.588t-.625.237zm14.15-.925q-.125.15-.312.075t-.138-.275L18.375 13H16.05q-.325 0-.462-.275t.062-.525l4.2-5.275q.125-.15.313-.075t.137.275L19.625 11h2.325q.325 0 .463.275t-.063.525z");
}
</style><path class="xped370_e"/>`,
		"fallback": "material-symbols:battery-android-bolt-rounded",
	});
}

export default Component;
