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
		"content": `<style>.updy44bfg {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m12.514 2.94l.175-.246q.674-.943 1.832-.943h.956q1.158 0 1.831.942l.177.248q.961 1.345-.098 2.616l-.413.495q1.356.441 2.444 1.53Q21.25 9.411 21.25 12t-1.831 4.419T15 18.25q-.32 0-.628-.028q-.39.635-.953 1.197Q11.589 21.25 9 21.25t-4.419-1.831Q2.75 17.589 2.75 15t1.831-4.419T9 8.75q.32 0 .628.028q.39-.635.953-1.197q1.088-1.089 2.444-1.53l-.413-.495q-1.058-1.271-.098-2.616");
}
</style><path class="updy44bfg"/>`,
		"fallback": "uix-solid:anniversary-rings",
	});
}

export default Component;
