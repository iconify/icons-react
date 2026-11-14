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
		"content": `<style>.yafvzxrsl {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M1.993 7.536Q2.4 9.173 3.765 9.902q-1.51 3.967.855 7.681q2.579 4.049 7.38 4.049t7.38-4.049q2.365-3.714.855-7.681q1.365-.729 1.772-2.366q.51-2.056-.988-3.555q-1.499-1.498-3.555-.988q-1.632.405-2.361 1.763q-3.103-1.223-6.206 0q-.729-1.358-2.361-1.763q-2.056-.51-3.555.988q-1.498 1.499-.988 3.555M9.75 14.75Q9.75 13 12 13t2.25 1.75T12 16.5t-2.25-1.75");
}
</style><path class="yafvzxrsl"/>`,
		"fallback": "uix-solid:category-toys",
	});
}

export default Component;
