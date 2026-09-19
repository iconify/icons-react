import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.erf0cibqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M34.25 13.75h-20.5L24 24l10.25-10.25zm-20.5 20.5h20.5L24 24L13.75 34.25zm20.5-20.5v20.5L44.5 24L34.25 13.75zm-20.5 20.5v-20.5L3.5 24l10.25 10.25zm6.848 3v2.65c0 .75.612 1.35 1.325 1.35s1.325-.6 1.325-1.35v-2.65m1.554 3.553c.25.3.55.45 1 .45h.6c.55 0 1-.45 1-1h0c0-.55-.45-1-1-1h-.65c-.55 0-1-.45-1-1h0c0-.55.45-1 1-1h.6c.45 0 .75.1 1 .45");
}
</style><path class="erf0cibqd"/>`,
		"fallback": "arcticons:hsbc-us",
	});
}

export default Component;
