import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in9d5ac6n.css';
import '../../css/x/x8exgwwud.css';
import '../../css/z/zvk0bob7z.css';
import '../../css/e/eyi-2nbur.css';
import '../../css/r/rsu5nla_g.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in9d5ac6n"><path class="x8exgwwud"/><path clip-rule="evenodd" class="zvk0bob7z"/><path class="eyi-2nbur"/><path class="rsu5nla_g"/></g>`,
		"fallback": "streamline-plump-color:clean-broom-wipe",
	});
}

export default Component;
