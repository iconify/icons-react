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
		"content": `<style>.g8wst429i {
  fill: currentColor;
  d: path("m20.875 17.7l-2.475-.85l1.95-5.375l2.125 4.375q.35.675-.3 1.375t-1.3.475m-6.275-.95l1.075-9.35q.05-.375.337-.513t.688-.012l2.5.925q.35.15.462.45t-.012.65l-2.825 7.85zm-7.4 0L4.375 8.9q-.125-.35-.012-.663t.462-.437l2.5-.925q.35-.15.663-.012t.362.537l1.05 9.35zm-4.3.95q-.65.2-1.175-.488T1.55 15.85l2.15-4.375l1.925 5.375zm8-.95L9.7 6q-.05-.425.237-.712T10.65 5h2.7q.425 0 .713.288T14.3 6l-1.2 10.75z");
}
</style><path class="g8wst429i"/>`,
		"fallback": "material-symbols:bakery-dining-rounded",
	});
}

export default Component;
