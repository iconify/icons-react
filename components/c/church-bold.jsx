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
		"content": `<style>.khz1blben {
  fill: currentColor;
  d: path("M230.17 141.71L196 121.21V104a12 12 0 0 0-6-10.42L140 65V52h12a12 12 0 0 0 0-24h-12V16a12 12 0 0 0-24 0v12h-12a12 12 0 0 0 0 24h12v13L66.05 93.58A12 12 0 0 0 60 104v17.21l-34.17 20.5A12 12 0 0 0 20 152v64a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12v-44a8 8 0 0 1 16 0v44a12 12 0 0 0 12 12h76a12 12 0 0 0 12-12v-64a12 12 0 0 0-5.83-10.29M44 158.79l16-9.6V204H44ZM128 140a32 32 0 0 0-32 32v32H84v-93l44-25.14L172 111v93h-12v-32a32 32 0 0 0-32-32m84 64h-16v-54.81l16 9.6Z");
}
</style><path class="khz1blben"/>`,
		"fallback": "ph:church-bold",
	});
}

export default Component;
