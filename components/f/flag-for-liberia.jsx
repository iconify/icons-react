import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.gt51_ab5f {
  d: path("M11.5 12.189H36v2.167H11.5zM0 16.917v2.166h36v-2.166H12zm11.5-9.455v2.167H36V9c0-.545-.111-1.064-.308-1.538H11.5zM0 21.644h36v2.167H0zM0 27c0 .545.111 1.064.308 1.538h35.383A3.98 3.98 0 0 0 36 27v-.629H0V27z");
  fill: var(--svg-color--eee, #EEE);
}

.iwq5_1xka {
  d: path("M35.692 28.538H.308A4 4 0 0 0 4 31h28a4 4 0 0 0 3.692-2.462zM0 23.811h36v2.561H0zM11.5 9.629H36v2.561H11.5zm24.192-2.167A4 4 0 0 0 32 5H11.5v2.462h24.192zM11.5 14.356H36v2.561H11.5zM0 19.083h36v2.561H0z");
  fill: var(--svg-color--bf0a30, #BF0A30);
}

.j8cizaboh {
  fill: var(--svg-color--fff, #FFF);
  d: path("M6.794 10.245L6 7.802l-.794 2.443H2.638l2.078 1.51l-.794 2.443L6 12.688l2.078 1.51l-.794-2.443l2.078-1.51z");
}

.mcndh7hvi {
  fill: var(--svg-color--002868, #002868);
  d: path("M4 5a4 4 0 0 0-4 4v7.917h12V5H4z");
}
</style><path class="iwq5_1xka"/><path class="gt51_ab5f"/><path class="mcndh7hvi"/><path class="j8cizaboh"/>`,
		"fallback": "twemoji:flag-for-liberia",
	});
}

export default Component;
