import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mduiahbmo.css';
import '../../css/d/dk-c4yjtp.css';
import '../../css/o/o2ayd2boy.css';
import '../../css/t/tolttpogx.css';
import '../../css/r/rl9y33bwp.css';
import '../../css/w/w7c9bzb2z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mduiahbmo"/><path class="dk-c4yjtp"/><path class="o2ayd2boy"/><path class="tolttpogx"/><path class="rl9y33bwp"/><path class="w7c9bzb2z"/>`,
		"fallback": "streamline-emojis:e-mail-1",
	});
}

export default Component;
