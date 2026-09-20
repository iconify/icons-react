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
		"content": `<style>.eyix29btp {
  fill: currentColor;
  d: path("M12.442 18.23V5.77h3.452v12.46zm-4.336 0V5.77h3.452v12.46zm-4.337 0V5.77h3.452v12.46zm13.01 0V5.77h3.452v12.46z");
}
</style><path class="eyix29btp"/>`,
		"fallback": "material-symbols-light:calendar-view-week-sharp",
	});
}

export default Component;
