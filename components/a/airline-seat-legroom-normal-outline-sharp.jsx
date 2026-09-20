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
		"content": `<style>.hwwtidbuu {
  fill: currentColor;
  d: path("M15.942 20.423V14.5h-9.5v-11h5v7h6.347v8.23h2.769v1.693zM13.866 16.5H4.442v-13h1v12h8.424z");
}
</style><path class="hwwtidbuu"/>`,
		"fallback": "material-symbols-light:airline-seat-legroom-normal-outline-sharp",
	});
}

export default Component;
