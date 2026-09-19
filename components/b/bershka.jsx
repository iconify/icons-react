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
		"content": `<style>.hy2-o0wfk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M31.035 26.036c2.367-.146 4.698-.798 6.193-3.613c1.94-3.475 1.135-6.524-1.663-9.32L26.948 4.5c.963 1.084 1.504 2.408 1.504 3.862v.505a5.7 5.7 0 0 1-5.72 5.702H9.337l5.632 6.636h8.406a5.7 5.7 0 0 1 5.72 5.702v.505a5.7 5.7 0 0 1-5.72 5.701H9.015l9.37 10.387h11.653c2.882 0 5.992-.186 7.832-3.653c1.94-3.475 1.322-6.722-1.663-9.32z");
}
</style><path class="hy2-o0wfk"/>`,
		"fallback": "arcticons:bershka",
	});
}

export default Component;
