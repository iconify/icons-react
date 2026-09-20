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
		"content": `<style>.tc3m7--0q {
  fill: currentColor;
  d: path("M20.228 17c.978 0 1.772.793 1.772 1.771v.104C22 20.431 20.714 22 17.5 22S13 20.437 13 18.875v-.104c0-.978.794-1.77 1.773-1.771zm-9.68-14.468a2.25 2.25 0 0 1 2.903 0l6.75 5.696A2.25 2.25 0 0 1 21 9.948v1.845a.207.207 0 0 1-.206.207a.22.22 0 0 1-.19-.117a3.5 3.5 0 0 0-1.104-1.255v-.68a.75.75 0 0 0-.267-.574l-6.75-5.695a.75.75 0 0 0-.966 0l-6.75 5.695a.75.75 0 0 0-.267.573v8.803c0 .414.336.75.75.75h6.803a3.66 3.66 0 0 0 .612 1.5H5.25A2.25 2.25 0 0 1 3 18.75V9.947c0-.663.292-1.292.799-1.72zM17.5 11a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5");
}
</style><path class="tc3m7--0q"/>`,
		"fallback": "fluent:home-person-24-regular",
	});
}

export default Component;
