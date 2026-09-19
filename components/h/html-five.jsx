import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/y/y27kjc42t.css';
import '../../css/o/odd5su9rz.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG5shBabjy"><g class="s9cl3zbei"><path class="y27kjc42t"/><path class="odd5su9rz"/></g></mask></defs><path mask="url(#SVG5shBabjy)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:html-five",
	});
}

export default Component;
