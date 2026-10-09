import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fmo52ol9d.css';
import '../../css/n/nvn445b8l.css';
import '../../css/z/zoo-ikbzp.css';
import '../../css/x/xieil5bgi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fmo52ol9d"/><path class="nvn445b8l"/><path class="zoo-ikbzp"/><path class="xieil5bgi"/>`,
		"fallback": "energy-icons:dining-table-48",
	});
}

export default Component;
