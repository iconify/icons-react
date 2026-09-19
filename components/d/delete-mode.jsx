import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr87l5bdb.css';
import '../../css/y/ymshcybtb.css';
import '../../css/n/na-18cbwr.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGZhn2ecEq"><g class="lr87l5bdb"><path class="ymshcybtb"/><path class="na-18cbwr"/></g></mask></defs><path mask="url(#SVGZhn2ecEq)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:delete-mode",
	});
}

export default Component;
