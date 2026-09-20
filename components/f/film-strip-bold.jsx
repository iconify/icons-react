import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.mx3hzl87z {
  fill: currentColor;
  d: path("M216 36H40a20 20 0 0 0-20 20v144a20 20 0 0 0 20 20h176a20 20 0 0 0 20-20V56a20 20 0 0 0-20-20M44 100h72v56H44Zm96-24V60h24v16Zm-24 0H92V60h24Zm0 104v16H92v-16Zm24 0h24v16h-24Zm0-24v-56h72v56Zm72-80h-24V60h24ZM68 60v16H44V60ZM44 180h24v16H44Zm144 16v-16h24v16Z");
}
</style><path class="mx3hzl87z"/>`,
		"fallback": "ph:film-strip-bold",
	});
}

export default Component;
