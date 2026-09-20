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
		"content": `<style>.qk1a6_4kv {
  fill: currentColor;
  d: path("M12.851 7.144A.5.5 0 0 0 12.5 7h-5a.5.5 0 0 0 0 1h3.793l-4.147 4.146a.5.5 0 0 0 .708.708L12 8.707V12.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-.144-.351zM10 2a8 8 0 1 1 0 16a8 8 0 0 1 0-16m7 8a7 7 0 1 0-14 0a7 7 0 0 0 14 0");
}
</style><path class="qk1a6_4kv"/>`,
		"fallback": "fluent:arrow-circle-up-right-20-regular",
	});
}

export default Component;
