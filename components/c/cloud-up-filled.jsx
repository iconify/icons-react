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
		"content": `<style>.pfz0krbbm {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M11.5 14v-3.322l.752.587a1 1 0 0 0 1.231-1.576l-2.304-1.8a1 1 0 0 0-.673-.259a1 1 0 0 0-.674.259l-2.304 1.8a1 1 0 0 0 1.231 1.576l.741-.578V14H6a4 4 0 0 1 0-8h.126C6.57 4.275 8.136 3 10 3h1c1.9 0 3.49 1.325 3.899 3.101A4.002 4.002 0 0 1 14 14h-2.5Z");
}
</style><path clip-rule="evenodd" class="pfz0krbbm"/>`,
		"fallback": "pepicons-pop:cloud-up-filled",
	});
}

export default Component;
