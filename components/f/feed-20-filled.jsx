import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.qf9wvyiyj {
  fill: currentColor;
  d: path("M12.469 17H4a2 2 0 0 1-2-2V4.5A1.5 1.5 0 0 1 3.5 3h7A1.5 1.5 0 0 1 12 4.5V6h4.484C17.25 6.023 18 6.6 18 7.582V12.5a1.5 1.5 0 0 1-1.5 1.5h-2.106l-.423 1.823c-.19.815-.851 1.197-1.502 1.177M15.01 7H12v8.482c0 .6.861.7.997.115L14.94 7.23q.03-.122.07-.231M5.5 7a.5.5 0 1 0 0-1a.5.5 0 0 0 0 1M5 10a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5m0 3.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 0-1h-3a.5.5 0 0 0-.5.5");
}
</style><path class="qf9wvyiyj"/>`,
		"fallback": "fluent:feed-20-filled",
	});
}

export default Component;
