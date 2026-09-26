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
		"content": `<style>.dbs1q3kot {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M12 1C17.937 1 23 6.0629 23 12C23 17.937 17.937 23 12 23C6.0629 23 1 17.937 1 12C1 6.0629 6.0629 1 12 1ZM11 5L11 12.268L13.9227 17.3301L15.6547 16.3301L13 11.732L13 5L11 5Z");
}
</style><path clip-rule="evenodd" class="dbs1q3kot"/>`,
		"fallback": "keyline-icons:clock-5-sharp-fill",
	});
}

export default Component;
