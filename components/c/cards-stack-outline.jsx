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
		"content": `<style>.tg853pbwb {
  fill: currentColor;
  d: path("M4.058 18.583L2.87 10.177q-.067-.416.205-.758t.688-.41l1.275 9.433q.038.25.24.414t.452.125l11.056-1.423h2.194q-.085.332-.343.56q-.26.228-.61.284L5.836 19.956q-.652.086-1.162-.317q-.51-.404-.615-1.056m4.173-3.387q-.69 0-1.153-.462t-.462-1.153V5.616q0-.691.462-1.153T8.231 4h11.154q.69 0 1.153.463T21 5.616v7.965q0 .69-.462 1.153t-1.153.462zm0-1h11.154q.269 0 .442-.173t.173-.442V5.616q0-.27-.173-.443T19.385 5H8.23q-.27 0-.442.173q-.173.173-.173.443v7.965q0 .269.173.442t.442.173m-.615 0V5zM10.308 8.5h7v-1h-7zm0 3.154h4v-1h-4z");
}
</style><path class="tg853pbwb"/>`,
		"fallback": "material-symbols-light:cards-stack-outline",
	});
}

export default Component;
