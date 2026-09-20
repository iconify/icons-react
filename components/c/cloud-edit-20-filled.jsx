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
		"content": `<style>.z_5fbr05b {
  fill: currentColor;
  d: path("M14.647 8.246C14.415 5.923 12.817 4 10 4S5.587 5.908 5.353 8.246h-.07C3.468 8.246 2 9.758 2 11.623S3.47 15 5.282 15h3.193c.152-.501.426-.958.798-1.33l4.829-4.83a2.9 2.9 0 0 1 .847-.586a3 3 0 0 0-.231-.008zm.162 1.302l-4.83 4.83a2.2 2.2 0 0 0-.577 1.02l-.375 1.498a.89.89 0 0 0 1.079 1.078l1.498-.374a2.2 2.2 0 0 0 1.02-.578l4.83-4.83a1.87 1.87 0 0 0-2.645-2.644");
}
</style><path class="z_5fbr05b"/>`,
		"fallback": "fluent:cloud-edit-20-filled",
	});
}

export default Component;
