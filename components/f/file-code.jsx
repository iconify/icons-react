import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/g/g9mt46brz.css';
import '../../css/x/xd0veabmf.css';
import '../../css/n/n3jvmegul.css';
import '../../css/m/mckl6xbbj.css';
import '../../css/a/a0o9nky4v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="g9mt46brz"/><path class="wm-shine xd0veabmf"/><path class="n3jvmegul wm-k"/><path class="mckl6xbbj wm-a"/><path class="a0o9nky4v wm-deco"/></g>`,
		"fallback": "withicons-kawaii:file-code",
	});
}

export default Component;
