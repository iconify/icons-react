import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/q/qek2tkbit.css';
import '../../css/n/n6tabbcyg.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG0n4yUdds"><g class="s9cl3zbei"><rect class="qek2tkbit"/><path class="n6tabbcyg"/></g></mask></defs><path mask="url(#SVG0n4yUdds)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:eight-key",
	});
}

export default Component;
