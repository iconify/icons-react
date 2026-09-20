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
		"content": `<style>.whik5k-ps {
  fill: currentColor;
  d: path("m14.673 18.327l-.713-.688l5.157-5.158H3v-1h16.137l-5.152-5.158l.688-.688l6.346 6.346z");
}
</style><path class="whik5k-ps"/>`,
		"fallback": "material-symbols-light:east-sharp",
	});
}

export default Component;
