import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwvp95byt.css';
import '../../css/g/g47cb4b4t.css';
import '../../css/y/y9u401bey.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG3f9NbehH"><g class="wwvp95byt"><rect class="g47cb4b4t"/><path class="y9u401bey"/></g></mask></defs><path mask="url(#SVG3f9NbehH)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:chinese-one",
	});
}

export default Component;
