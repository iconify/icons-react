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
		"content": `<style>.exhwy_e6o {
  fill: currentColor;
  d: path("M14.089 11.264L7.825 5h10.156q.317 0 .467.28t-.052.55zM13 14.42v3.81q0 .328-.22.549t-.55.22h-.46q-.33 0-.55-.22t-.22-.55V12.42l-7.9-7.9q-.14-.14-.15-.341t.15-.366q.165-.166.357-.166t.356.166l16.38 16.378q.145.147.152.345t-.158.363q-.166.16-.354.163t-.354-.163z");
}
</style><path class="exhwy_e6o"/>`,
		"fallback": "material-symbols-light:filter-alt-off-rounded",
	});
}

export default Component;
