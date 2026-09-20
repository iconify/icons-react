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
		"content": `<style>.thgdtob0g {
  fill: currentColor;
  d: path("M15.55 12.675L11.325 8.45l6.3-6.3l4.2 4.275zM19.8 22.6l-7.075-7.05L7.25 21H3v-4.225L8.475 11.3L1.4 4.2l1.425-1.425l18.4 18.4zM17.6 7.8L19 6.4L17.6 5l-1.4 1.4z");
}
</style><path class="thgdtob0g"/>`,
		"fallback": "material-symbols:edit-off-sharp",
	});
}

export default Component;
