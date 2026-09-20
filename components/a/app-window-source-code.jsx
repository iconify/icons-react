import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hk0wkabcu.css';
import '../../css/z/zabn4ccgw.css';
import '../../css/u/u-cgk-avz.css';
import '../../css/n/n98rmsbvi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hk0wkabcu"/><path clip-rule="evenodd" class="zabn4ccgw"/><path clip-rule="evenodd" class="u-cgk-avz"/><path class="n98rmsbvi"/>`,
		"fallback": "streamline-freehand:app-window-source-code",
	});
}

export default Component;
