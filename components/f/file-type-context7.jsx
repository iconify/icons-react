import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.b3c4xhbqj {
  width: 28px;
  height: 28px;
  fill: var(--svg-color--059669, #059669);
  rx: 4px;
}

.ft5dv1b6b {
  fill: none;
}

.l_9c-0bth {
  fill: var(--svg-color--fff, #fff);
  d: path("M10.572 15.257c0 2.246-.91 4.12-2.394 5.848h3.454v1.674H6.335v-1.59c1.62-1.832 2.246-3.326 2.246-5.932zm6.856 0c0 2.246.91 4.12 2.394 5.848h-3.454v1.674h5.297v-1.59c-1.62-1.832-2.246-3.326-2.246-5.932zm-6.856-2.513c0-2.247-.91-4.122-2.394-5.849h3.454V5.221H6.335v1.59c1.62 1.832 2.246 3.326 2.246 5.933zm6.856 0c0-2.247.91-4.122 2.394-5.849h-3.454V5.221h5.297v1.59c-1.62 1.832-2.246 3.326-2.246 5.933z");
}
</style><g transform="translate(2 2)" class="ft5dv1b6b"><rect class="b3c4xhbqj"/><path class="l_9c-0bth"/></g>`,
		"fallback": "vscode-icons:file-type-context7",
	});
}

export default Component;
