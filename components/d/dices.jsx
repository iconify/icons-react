import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/s/s_pbgac4l.css';
import '../../css/q/qzfp3nbdj.css';
import '../../css/a/amqc4dfgh.css';
import '../../css/k/kye7fgb5m.css';
import '../../css/c/cd6w10bql.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="s_pbgac4l"/><path class="qzfp3nbdj wm-shine"/><path class="amqc4dfgh wm-k"/><path class="kye7fgb5m wm-a"/><path class="cd6w10bql wm-deco"/></g>`,
		"fallback": "withicons-kawaii:dices",
	});
}

export default Component;
