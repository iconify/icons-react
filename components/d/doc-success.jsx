import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jnb6jybjq.css';
import '../../css/e/e8d1dpblu.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG92SymFYr"><g class="wwvp95byt"><path class="jnb6jybjq"/><path class="e8d1dpblu"/></g></mask></defs><path mask="url(#SVG92SymFYr)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:doc-success",
	});
}

export default Component;
