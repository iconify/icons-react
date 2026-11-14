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
		"content": `<style>.pocy658dn {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("m13.465 6.293l2.828-2.828q.878-.879 2.121-.879t2.121.879q.879.878.879 2.121t-.879 2.121l-2.828 2.828q-.603.604-1.379.793q-.189.776-.793 1.379l-2.828 2.828q-.603.604-1.379.793q-.189.776-.793 1.379l-2.828 2.828q-.878.879-2.121.879t-2.121-.879q-.879-.878-.879-2.121t.879-2.121l2.828-2.828q.603-.604 1.379-.793q.189-.776.793-1.379l2.828-2.828q.603-.604 1.379-.793q.189-.776.793-1.379");
}
</style><path class="pocy658dn"/>`,
		"fallback": "uix-solid:attack-chain",
	});
}

export default Component;
