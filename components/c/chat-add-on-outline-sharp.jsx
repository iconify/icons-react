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
		"content": `<style>.cwmaw3b8m {
  fill: currentColor;
  d: path("M3.5 18.789V3.5h15v6.517q-.125-.011-.25-.014T18 10t-.25.003t-.25.014V4.5h-13v11h7.517q-.011.125-.014.25T12 16t.003.25t.014.25H5.79zM7.116 8.5h7.769v-1h-7.77zm0 4h4.769v-1h-4.77zm10.384 7v-3h-3v-1h3v-3h1v3h3v1h-3v3zm-13-4v-11z");
}
</style><path class="cwmaw3b8m"/>`,
		"fallback": "material-symbols-light:chat-add-on-outline-sharp",
	});
}

export default Component;
