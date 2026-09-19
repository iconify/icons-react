import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/t/tafy_bkcg.css';
import '../../css/a/atfugacej.css';
import '../../css/x/x0v0iccjn.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG4ZhTfcIf"><g class="s9cl3zbei"><circle class="tafy_bkcg"/><circle class="atfugacej"/><path class="x0v0iccjn"/></g></mask></defs><path mask="url(#SVG4ZhTfcIf)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:gauze",
	});
}

export default Component;
