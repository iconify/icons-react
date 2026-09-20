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
		"content": `<style>.qw70lyb9w {
  fill: currentColor;
  d: path("m20.11 21.53l-1.57-1.568q-.096.019-.173.028q-.077.01-.173.01H5.615q-.67 0-1.143-.472Q4 19.056 4 18.385V5.805q0-.095.01-.172q.01-.077.048-.154L2.469 3.885l.708-.708l17.646 17.646l-.713.708ZM5.615 19H17.58l-2.5-2.5H7l2.5-3.308l1.885 2.283l1.138-1.53L5 6.42v11.964q0 .269.173.442t.442.173ZM20 17.175l-1-1V5.615q0-.269-.173-.442T18.385 5H7.825l-1-1h11.56q.67 0 1.143.472q.472.472.472 1.143v11.56Zm-6.525-6.525Zm-2.163 2.083Z");
}
</style><path class="qw70lyb9w"/>`,
		"fallback": "material-symbols-light:image-not-supported-outline",
	});
}

export default Component;
