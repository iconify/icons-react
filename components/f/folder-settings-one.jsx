import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rohhhzb0l.css';
import '../../css/r/rjn-u5bcv.css';
import '../../css/q/q9lz45bgk.css';
import '../../css/f/f4tcrjb5t.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwO3CBc8U"><g class="rohhhzb0l"><path class="rjn-u5bcv"/><circle class="q9lz45bgk"/><path class="f4tcrjb5t"/></g></mask></defs><path mask="url(#SVGwO3CBc8U)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:folder-settings-one",
	});
}

export default Component;
