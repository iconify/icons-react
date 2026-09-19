import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lr87l5bdb.css';
import '../../css/y/ymshcybtb.css';
import '../../css/i/i-lm01b3y.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGitgYkEpi"><g class="lr87l5bdb"><path class="ymshcybtb"/><path class="i-lm01b3y"/></g></mask></defs><path mask="url(#SVGitgYkEpi)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:add-mode",
	});
}

export default Component;
