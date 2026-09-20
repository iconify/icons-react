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
		"content": `<style>.lkdg1mb9a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.413 26.677l-4.39 5.61l-2.196-2.794l-4.579 5.713h5.056l6.798.037h5.73ZM8.7 7.98zv4.2H4.5a4.2 4.2 0 0 1 4.2-4.2m-4.2 6.96h4.2v4.2H4.5zm34.8-6.96za4.2 4.2 0 0 1 4.2 4.2h-4.2zm-27.84 0h4.2v4.2h-4.2zm6.96 0h4.2v4.2h-4.2zm6.96 0h4.2v4.2h-4.2zm6.96 0h4.2v4.2h-4.2zm0 27.84h4.2v4.2h-4.2zm11.16 0za4.2 4.2 0 0 1-4.2 4.2v-4.2zm0-20.88v4.2h-4.2v-4.2zm0 6.96v4.2h-4.2v-4.2zm0 6.96v4.2h-4.2v-4.2z");
}

.vc2cy1b8q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 21.9h25.08v18.12H8.7a4.2 4.2 0 0 1-4.2-4.2z");
}
</style><path class="lkdg1mb9a"/><path class="vc2cy1b8q"/>`,
		"fallback": "arcticons:exifthumbnailadder",
	});
}

export default Component;
