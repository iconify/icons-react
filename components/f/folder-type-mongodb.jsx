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
		"content": `<style>.ambz82b7n {
  fill: var(--svg-color--00684a, #00684a);
  d: path("M27.86 12.34c-.9-1.05-1.67-2.11-1.83-2.33q-.03-.03-.06 0c-.16.22-.93 1.28-1.83 2.33c-7.72 9.65 1.22 16.16 1.22 16.16l.07.05c.07 1 .23 2.45.23 2.45h.67s.17-1.44.23-2.45l.07-.06s8.94-6.5 1.22-16.15ZM26 28.35s-.4-.33-.51-.51v-.02l.48-10.51s.05-.03.05 0l.48 10.51v.02c-.11.17-.51.51-.51.51Z");
}

.dm5h--obp {
  fill: var(--svg-color--447567, #447567);
  d: path("M27.5 5.5h-9.3l-2.1 4.2H4.4v16.8h25.2v-21zm0 4.2h-8.2l1.1-2.1h7.1z");
}
</style><path class="dm5h--obp"/><path class="ambz82b7n"/>`,
		"fallback": "vscode-icons:folder-type-mongodb",
	});
}

export default Component;
