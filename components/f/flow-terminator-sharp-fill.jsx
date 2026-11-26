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
		"content": `<style>.pl__oybuc {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.6569 6.3431C22.1035 7.7898 23 9.7911 23 12C23 16.4183 19.4183 20 15 20L9 20C4.5817 20 1 16.4183 1 12C1 7.5817 4.5817 4 9 4L15 4C17.2089 4 19.2102 4.8965 20.6569 6.3431Z");
}
</style><path clip-rule="evenodd" class="pl__oybuc"/>`,
		"fallback": "keyline-icons:flow-terminator-sharp-fill",
	});
}

export default Component;
