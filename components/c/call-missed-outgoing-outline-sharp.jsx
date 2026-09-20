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
		"content": `<style>.d1jxvubqk {
  fill: currentColor;
  d: path("m12 17.425l-9-9L4.4 7l7.6 7.6L17.6 9H13V7h8v8h-2v-4.575z");
}
</style><path class="d1jxvubqk"/>`,
		"fallback": "material-symbols:call-missed-outgoing-outline-sharp",
	});
}

export default Component;
