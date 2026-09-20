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
		"content": `<style>.atb0_9_wf {
  fill: var(--svg-color--7bb4db, #7bb4db);
  d: path("M25.7 13.7H.5l3.8 12.8h25.2z");
}

.b_0w5i3mq {
  fill: var(--svg-color--7bb4db, #7bb4db);
  d: path("M27.4 5.5h-9.2l-2.1 4.2H4.3v16.8h25.2v-21Zm0 18.7H6.6V11.8h20.8Zm0-14.5h-8.2l1-2.1h7.1v2.1Z");
}

.djo5oac6k {
  fill: var(--svg-color--007acc, #007acc);
  d: path("m17.187 22.516l-5.167 3.892l-2.131-.708l5.255-5.2l-5.255-5.2l2.13-.711l5.167 3.892L25.77 10l5.14 2.183v16.633L25.77 31Zm2.678-2.016l5.9 4.447v-8.894Z");
}
</style><path class="b_0w5i3mq"/><path class="atb0_9_wf"/><path class="djo5oac6k"/>`,
		"fallback": "vscode-icons:folder-type-vscode2-opened",
	});
}

export default Component;
