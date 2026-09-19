import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/p/p928kbc7k.css';
import '../../css/n/n8izfmqik.css';
import '../../css/z/zfi3v6pvn.css';
import '../../css/z/z8d6w4btp.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGNlwrze2D"><g class="s9cl3zbei"><path class="p928kbc7k"/><path clip-rule="evenodd" class="n8izfmqik"/><path class="zfi3v6pvn"/><path class="z8d6w4btp"/></g></mask></defs><path mask="url(#SVGNlwrze2D)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bottle",
	});
}

export default Component;
