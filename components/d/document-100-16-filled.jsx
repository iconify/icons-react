import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.rc9munzau {
  fill: currentColor;
  d: path("M8 1v3.5A1.5 1.5 0 0 0 9.5 6H13v7.5a1.5 1.5 0 0 1-1.5 1.5c.314-.418.5-.937.5-1.5v-2A2.5 2.5 0 0 0 7.5 10a2.5 2.5 0 0 0-2-1c-.697 0-1.328.286-1.782.746A1.66 1.66 0 0 0 3 9.156V2.5A1.5 1.5 0 0 1 4.5 1zm1 .25V4.5a.5.5 0 0 0 .5.5h3.25zM5.5 10A1.5 1.5 0 0 0 4 11.5v2a1.5 1.5 0 0 0 3 0v-2A1.5 1.5 0 0 0 5.5 10M5 11.5a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0zm3 0a1.5 1.5 0 0 1 3 0v2a1.5 1.5 0 0 1-3 0zm1.5-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 1 0v-2a.5.5 0 0 0-.5-.5M3 10.654a.62.62 0 0 0-.199-.45a.7.7 0 0 0-.306-.168c-.152-.041-.502-.07-.725.225c-.197.26-.51.571-.977.784a.5.5 0 0 0 .414.91A3.5 3.5 0 0 0 2 11.458V14.5a.5.5 0 0 0 1 0z");
}
</style><path class="rc9munzau"/>`,
		"fallback": "fluent:document-100-16-filled",
	});
}

export default Component;
