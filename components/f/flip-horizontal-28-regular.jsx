import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":28,"height":28};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.d8bjtn7sr {
  fill: currentColor;
  d: path("M25.882 23.654a.75.75 0 0 1-.632.346h-9.5a.75.75 0 0 1-.75-.75V2.75a.75.75 0 0 1 1.43-.315l9.5 20.5a.75.75 0 0 1-.048.719M16.5 6.152V22.5h7.576zM2.75 24a.75.75 0 0 1-.68-1.065l9.5-20.5A.75.75 0 0 1 13 2.75v20.5a.75.75 0 0 1-.75.75z");
}
</style><path class="d8bjtn7sr"/>`,
		"fallback": "fluent:flip-horizontal-28-regular",
	});
}

export default Component;
