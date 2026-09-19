import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/j/jnb6jybjq.css';
import '../../css/b/bo1650c6m.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGq5AkQcel"><g class="wwvp95byt"><path class="jnb6jybjq"/><path class="bo1650c6m"/></g></mask></defs><path mask="url(#SVGq5AkQcel)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:doc-fail",
	});
}

export default Component;
