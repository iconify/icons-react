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
		"content": `<style>.jl-hewhul {
  fill: currentColor;
  d: path("M12.5 40.75a1.25 1.25 0 1 1-2.5 0v-18.5A7.25 7.25 0 0 1 17.25 15h18.168l-7.04-6.854a1.25 1.25 0 0 1 1.744-1.792l9.5 9.25a1.25 1.25 0 0 1 0 1.792l-9.5 9.25a1.25 1.25 0 0 1-1.744-1.792l7.553-7.354H17.25a4.75 4.75 0 0 0-4.75 4.75z");
}
</style><path class="jl-hewhul"/>`,
		"fallback": "fluent:arrow-turn-right-48-regular",
	});
}

export default Component;
